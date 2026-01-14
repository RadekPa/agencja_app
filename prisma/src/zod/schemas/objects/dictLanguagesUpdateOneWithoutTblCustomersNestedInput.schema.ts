import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesCreateWithoutTblCustomersInputObjectSchema as dictLanguagesCreateWithoutTblCustomersInputObjectSchema } from './dictLanguagesCreateWithoutTblCustomersInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblCustomersInput.schema';
import { dictLanguagesCreateOrConnectWithoutTblCustomersInputObjectSchema as dictLanguagesCreateOrConnectWithoutTblCustomersInputObjectSchema } from './dictLanguagesCreateOrConnectWithoutTblCustomersInput.schema';
import { dictLanguagesUpsertWithoutTblCustomersInputObjectSchema as dictLanguagesUpsertWithoutTblCustomersInputObjectSchema } from './dictLanguagesUpsertWithoutTblCustomersInput.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema';
import { dictLanguagesUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema as dictLanguagesUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema } from './dictLanguagesUpdateToOneWithWhereWithoutTblCustomersInput.schema';
import { dictLanguagesUpdateWithoutTblCustomersInputObjectSchema as dictLanguagesUpdateWithoutTblCustomersInputObjectSchema } from './dictLanguagesUpdateWithoutTblCustomersInput.schema';
import { dictLanguagesUncheckedUpdateWithoutTblCustomersInputObjectSchema as dictLanguagesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictLanguagesCreateOrConnectWithoutTblCustomersInputObjectSchema).optional(),
  upsert: z.lazy(() => dictLanguagesUpsertWithoutTblCustomersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictLanguagesUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => dictLanguagesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutTblCustomersInputObjectSchema)]).optional()
}).strict();
export const dictLanguagesUpdateOneWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpdateOneWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpdateOneWithoutTblCustomersNestedInput>;
export const dictLanguagesUpdateOneWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
