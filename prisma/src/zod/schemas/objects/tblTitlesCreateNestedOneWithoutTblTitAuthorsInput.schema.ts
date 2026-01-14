import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema as tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesCreateWithoutTblTitAuthorsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitAuthorsInput.schema';
import { tblTitlesCreateOrConnectWithoutTblTitAuthorsInputObjectSchema as tblTitlesCreateOrConnectWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblTitAuthorsInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblTitAuthorsInputObjectSchema).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblTitlesCreateNestedOneWithoutTblTitAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblTitAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblTitAuthorsInput>;
export const tblTitlesCreateNestedOneWithoutTblTitAuthorsInputObjectZodSchema = makeSchema();
