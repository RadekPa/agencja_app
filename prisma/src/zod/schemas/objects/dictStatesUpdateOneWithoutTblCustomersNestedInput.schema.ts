import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesCreateWithoutTblCustomersInputObjectSchema as dictStatesCreateWithoutTblCustomersInputObjectSchema } from './dictStatesCreateWithoutTblCustomersInput.schema';
import { dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema as dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './dictStatesUncheckedCreateWithoutTblCustomersInput.schema';
import { dictStatesCreateOrConnectWithoutTblCustomersInputObjectSchema as dictStatesCreateOrConnectWithoutTblCustomersInputObjectSchema } from './dictStatesCreateOrConnectWithoutTblCustomersInput.schema';
import { dictStatesUpsertWithoutTblCustomersInputObjectSchema as dictStatesUpsertWithoutTblCustomersInputObjectSchema } from './dictStatesUpsertWithoutTblCustomersInput.schema';
import { dictStatesWhereInputObjectSchema as dictStatesWhereInputObjectSchema } from './dictStatesWhereInput.schema';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './dictStatesWhereUniqueInput.schema';
import { dictStatesUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema as dictStatesUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema } from './dictStatesUpdateToOneWithWhereWithoutTblCustomersInput.schema';
import { dictStatesUpdateWithoutTblCustomersInputObjectSchema as dictStatesUpdateWithoutTblCustomersInputObjectSchema } from './dictStatesUpdateWithoutTblCustomersInput.schema';
import { dictStatesUncheckedUpdateWithoutTblCustomersInputObjectSchema as dictStatesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './dictStatesUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictStatesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictStatesCreateOrConnectWithoutTblCustomersInputObjectSchema).optional(),
  upsert: z.lazy(() => dictStatesUpsertWithoutTblCustomersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictStatesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictStatesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictStatesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictStatesUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => dictStatesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictStatesUncheckedUpdateWithoutTblCustomersInputObjectSchema)]).optional()
}).strict();
export const dictStatesUpdateOneWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.dictStatesUpdateOneWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUpdateOneWithoutTblCustomersNestedInput>;
export const dictStatesUpdateOneWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
