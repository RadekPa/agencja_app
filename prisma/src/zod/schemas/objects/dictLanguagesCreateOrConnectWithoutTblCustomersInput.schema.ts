import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema';
import { dictLanguagesCreateWithoutTblCustomersInputObjectSchema as dictLanguagesCreateWithoutTblCustomersInputObjectSchema } from './dictLanguagesCreateWithoutTblCustomersInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const dictLanguagesCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateOrConnectWithoutTblCustomersInput>;
export const dictLanguagesCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
