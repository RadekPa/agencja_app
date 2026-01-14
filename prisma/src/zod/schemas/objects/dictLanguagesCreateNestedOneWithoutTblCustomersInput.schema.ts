import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesCreateWithoutTblCustomersInputObjectSchema as dictLanguagesCreateWithoutTblCustomersInputObjectSchema } from './dictLanguagesCreateWithoutTblCustomersInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblCustomersInput.schema';
import { dictLanguagesCreateOrConnectWithoutTblCustomersInputObjectSchema as dictLanguagesCreateOrConnectWithoutTblCustomersInputObjectSchema } from './dictLanguagesCreateOrConnectWithoutTblCustomersInput.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictLanguagesCreateOrConnectWithoutTblCustomersInputObjectSchema).optional(),
  connect: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictLanguagesCreateNestedOneWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateNestedOneWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateNestedOneWithoutTblCustomersInput>;
export const dictLanguagesCreateNestedOneWithoutTblCustomersInputObjectZodSchema = makeSchema();
