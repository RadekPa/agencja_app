import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAuthorsWhereUniqueInputObjectSchema as tblAuthorsWhereUniqueInputObjectSchema } from './tblAuthorsWhereUniqueInput.schema';
import { tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsCreateWithoutTblTitAuthorsInput.schema';
import { tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUncheckedCreateWithoutTblTitAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAuthorsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema)])
}).strict();
export const tblAuthorsCreateOrConnectWithoutTblTitAuthorsInputObjectSchema: z.ZodType<Prisma.tblAuthorsCreateOrConnectWithoutTblTitAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsCreateOrConnectWithoutTblTitAuthorsInput>;
export const tblAuthorsCreateOrConnectWithoutTblTitAuthorsInputObjectZodSchema = makeSchema();
