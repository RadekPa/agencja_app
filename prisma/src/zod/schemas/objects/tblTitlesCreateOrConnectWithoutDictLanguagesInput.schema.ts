import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesCreateWithoutDictLanguagesInputObjectSchema as tblTitlesCreateWithoutDictLanguagesInputObjectSchema } from './tblTitlesCreateWithoutDictLanguagesInput.schema';
import { tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblTitlesUncheckedCreateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblTitlesCreateOrConnectWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutDictLanguagesInput>;
export const tblTitlesCreateOrConnectWithoutDictLanguagesInputObjectZodSchema = makeSchema();
