import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesCreateWithoutTblCustomersInputObjectSchema as dictStatesCreateWithoutTblCustomersInputObjectSchema } from './dictStatesCreateWithoutTblCustomersInput.schema';
import { dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema as dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './dictStatesUncheckedCreateWithoutTblCustomersInput.schema';
import { dictStatesCreateOrConnectWithoutTblCustomersInputObjectSchema as dictStatesCreateOrConnectWithoutTblCustomersInputObjectSchema } from './dictStatesCreateOrConnectWithoutTblCustomersInput.schema';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './dictStatesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictStatesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictStatesCreateOrConnectWithoutTblCustomersInputObjectSchema).optional(),
  connect: z.lazy(() => dictStatesWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictStatesCreateNestedOneWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictStatesCreateNestedOneWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesCreateNestedOneWithoutTblCustomersInput>;
export const dictStatesCreateNestedOneWithoutTblCustomersInputObjectZodSchema = makeSchema();
