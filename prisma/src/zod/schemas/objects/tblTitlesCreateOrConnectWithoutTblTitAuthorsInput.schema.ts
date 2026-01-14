import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema as tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesCreateWithoutTblTitAuthorsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema)])
}).strict();
export const tblTitlesCreateOrConnectWithoutTblTitAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblTitAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblTitAuthorsInput>;
export const tblTitlesCreateOrConnectWithoutTblTitAuthorsInputObjectZodSchema = makeSchema();
