import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesCreateWithoutTblTitlesInputObjectSchema as dictLanguagesCreateWithoutTblTitlesInputObjectSchema } from './dictLanguagesCreateWithoutTblTitlesInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblTitlesInput.schema';
import { dictLanguagesCreateOrConnectWithoutTblTitlesInputObjectSchema as dictLanguagesCreateOrConnectWithoutTblTitlesInputObjectSchema } from './dictLanguagesCreateOrConnectWithoutTblTitlesInput.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictLanguagesCreateOrConnectWithoutTblTitlesInputObjectSchema).optional(),
  connect: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictLanguagesCreateNestedOneWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateNestedOneWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateNestedOneWithoutTblTitlesInput>;
export const dictLanguagesCreateNestedOneWithoutTblTitlesInputObjectZodSchema = makeSchema();
