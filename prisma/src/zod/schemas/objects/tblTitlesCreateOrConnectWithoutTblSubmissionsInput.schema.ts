import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesCreateWithoutTblSubmissionsInputObjectSchema as tblTitlesCreateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesCreateWithoutTblSubmissionsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const tblTitlesCreateOrConnectWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblSubmissionsInput>;
export const tblTitlesCreateOrConnectWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
