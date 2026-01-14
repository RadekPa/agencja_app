import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema';
import { dictLanguagesCreateWithoutTblTitlesInputObjectSchema as dictLanguagesCreateWithoutTblTitlesInputObjectSchema } from './dictLanguagesCreateWithoutTblTitlesInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const dictLanguagesCreateOrConnectWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateOrConnectWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateOrConnectWithoutTblTitlesInput>;
export const dictLanguagesCreateOrConnectWithoutTblTitlesInputObjectZodSchema = makeSchema();
